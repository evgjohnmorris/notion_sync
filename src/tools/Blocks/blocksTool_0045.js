/**
 * Generated Tool: blocksTool_0045
 * Domain: Blocks
 * ID: 0045
 */
exports.blocksTool_0045 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0045:', error);
    throw error;
  }
};
