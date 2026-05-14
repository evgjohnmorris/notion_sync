/**
 * Generated Tool: blocksTool_0226
 * Domain: Blocks
 * ID: 0226
 */
exports.blocksTool_0226 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0226:', error);
    throw error;
  }
};
