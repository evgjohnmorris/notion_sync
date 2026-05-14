/**
 * Generated Tool: blocksTool_0628
 * Domain: Blocks
 * ID: 0628
 */
exports.blocksTool_0628 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0628:', error);
    throw error;
  }
};
