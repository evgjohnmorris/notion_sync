/**
 * Generated Tool: blocksTool_0438
 * Domain: Blocks
 * ID: 0438
 */
exports.blocksTool_0438 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0438:', error);
    throw error;
  }
};
