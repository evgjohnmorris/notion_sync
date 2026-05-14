/**
 * Generated Tool: blocksTool_0292
 * Domain: Blocks
 * ID: 0292
 */
exports.blocksTool_0292 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0292:', error);
    throw error;
  }
};
