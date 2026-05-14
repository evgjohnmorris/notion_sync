/**
 * Generated Tool: blocksTool_0372
 * Domain: Blocks
 * ID: 0372
 */
exports.blocksTool_0372 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0372:', error);
    throw error;
  }
};
