/**
 * Generated Tool: blocksTool_0307
 * Domain: Blocks
 * ID: 0307
 */
exports.blocksTool_0307 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0307:', error);
    throw error;
  }
};
