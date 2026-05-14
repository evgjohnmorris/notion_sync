/**
 * Generated Tool: blocksTool_0031
 * Domain: Blocks
 * ID: 0031
 */
exports.blocksTool_0031 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0031:', error);
    throw error;
  }
};
