/**
 * Generated Tool: blocksTool_0506
 * Domain: Blocks
 * ID: 0506
 */
exports.blocksTool_0506 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0506:', error);
    throw error;
  }
};
