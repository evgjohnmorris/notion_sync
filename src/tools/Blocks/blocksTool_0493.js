/**
 * Generated Tool: blocksTool_0493
 * Domain: Blocks
 * ID: 0493
 */
exports.blocksTool_0493 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0493:', error);
    throw error;
  }
};
