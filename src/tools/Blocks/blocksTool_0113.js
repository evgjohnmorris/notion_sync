/**
 * Generated Tool: blocksTool_0113
 * Domain: Blocks
 * ID: 0113
 */
exports.blocksTool_0113 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0113:', error);
    throw error;
  }
};
