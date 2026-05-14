/**
 * Generated Tool: blocksTool_0414
 * Domain: Blocks
 * ID: 0414
 */
exports.blocksTool_0414 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0414:', error);
    throw error;
  }
};
