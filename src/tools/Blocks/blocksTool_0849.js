/**
 * Generated Tool: blocksTool_0849
 * Domain: Blocks
 * ID: 0849
 */
exports.blocksTool_0849 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0849:', error);
    throw error;
  }
};
