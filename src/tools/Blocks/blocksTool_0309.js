/**
 * Generated Tool: blocksTool_0309
 * Domain: Blocks
 * ID: 0309
 */
exports.blocksTool_0309 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0309:', error);
    throw error;
  }
};
