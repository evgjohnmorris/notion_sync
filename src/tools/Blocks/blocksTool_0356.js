/**
 * Generated Tool: blocksTool_0356
 * Domain: Blocks
 * ID: 0356
 */
exports.blocksTool_0356 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0356:', error);
    throw error;
  }
};
