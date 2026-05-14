/**
 * Generated Tool: blocksTool_0420
 * Domain: Blocks
 * ID: 0420
 */
exports.blocksTool_0420 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0420:', error);
    throw error;
  }
};
