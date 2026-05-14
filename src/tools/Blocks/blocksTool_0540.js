/**
 * Generated Tool: blocksTool_0540
 * Domain: Blocks
 * ID: 0540
 */
exports.blocksTool_0540 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0540:', error);
    throw error;
  }
};
