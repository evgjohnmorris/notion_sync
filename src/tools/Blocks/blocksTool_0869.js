/**
 * Generated Tool: blocksTool_0869
 * Domain: Blocks
 * ID: 0869
 */
exports.blocksTool_0869 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0869:', error);
    throw error;
  }
};
