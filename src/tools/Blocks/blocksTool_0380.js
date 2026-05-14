/**
 * Generated Tool: blocksTool_0380
 * Domain: Blocks
 * ID: 0380
 */
exports.blocksTool_0380 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0380:', error);
    throw error;
  }
};
