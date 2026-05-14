/**
 * Generated Tool: blocksTool_0437
 * Domain: Blocks
 * ID: 0437
 */
exports.blocksTool_0437 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0437:', error);
    throw error;
  }
};
