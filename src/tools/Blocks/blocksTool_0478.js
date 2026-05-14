/**
 * Generated Tool: blocksTool_0478
 * Domain: Blocks
 * ID: 0478
 */
exports.blocksTool_0478 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0478:', error);
    throw error;
  }
};
