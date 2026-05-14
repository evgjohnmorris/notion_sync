/**
 * Generated Tool: blocksTool_0528
 * Domain: Blocks
 * ID: 0528
 */
exports.blocksTool_0528 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0528:', error);
    throw error;
  }
};
