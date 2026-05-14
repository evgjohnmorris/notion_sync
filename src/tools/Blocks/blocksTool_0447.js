/**
 * Generated Tool: blocksTool_0447
 * Domain: Blocks
 * ID: 0447
 */
exports.blocksTool_0447 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0447:', error);
    throw error;
  }
};
