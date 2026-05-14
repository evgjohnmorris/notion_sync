/**
 * Generated Tool: blocksTool_0214
 * Domain: Blocks
 * ID: 0214
 */
exports.blocksTool_0214 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0214:', error);
    throw error;
  }
};
