/**
 * Generated Tool: blocksTool_0946
 * Domain: Blocks
 * ID: 0946
 */
exports.blocksTool_0946 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0946:', error);
    throw error;
  }
};
