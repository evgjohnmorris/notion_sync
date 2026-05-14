/**
 * Generated Tool: blocksTool_0908
 * Domain: Blocks
 * ID: 0908
 */
exports.blocksTool_0908 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0908:', error);
    throw error;
  }
};
