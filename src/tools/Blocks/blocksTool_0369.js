/**
 * Generated Tool: blocksTool_0369
 * Domain: Blocks
 * ID: 0369
 */
exports.blocksTool_0369 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0369:', error);
    throw error;
  }
};
