/**
 * Generated Tool: blocksTool_0452
 * Domain: Blocks
 * ID: 0452
 */
exports.blocksTool_0452 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0452:', error);
    throw error;
  }
};
