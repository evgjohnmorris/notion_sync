/**
 * Generated Tool: blocksTool_0812
 * Domain: Blocks
 * ID: 0812
 */
exports.blocksTool_0812 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0812:', error);
    throw error;
  }
};
