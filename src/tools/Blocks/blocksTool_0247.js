/**
 * Generated Tool: blocksTool_0247
 * Domain: Blocks
 * ID: 0247
 */
exports.blocksTool_0247 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0247:', error);
    throw error;
  }
};
