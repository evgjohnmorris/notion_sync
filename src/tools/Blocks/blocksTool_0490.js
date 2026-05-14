/**
 * Generated Tool: blocksTool_0490
 * Domain: Blocks
 * ID: 0490
 */
exports.blocksTool_0490 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0490:', error);
    throw error;
  }
};
