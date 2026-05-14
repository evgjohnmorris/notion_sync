/**
 * Generated Tool: blocksTool_0236
 * Domain: Blocks
 * ID: 0236
 */
exports.blocksTool_0236 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0236:', error);
    throw error;
  }
};
