/**
 * Generated Tool: blocksTool_0049
 * Domain: Blocks
 * ID: 0049
 */
exports.blocksTool_0049 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0049:', error);
    throw error;
  }
};
