/**
 * Generated Tool: blocksTool_0769
 * Domain: Blocks
 * ID: 0769
 */
exports.blocksTool_0769 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0769:', error);
    throw error;
  }
};
