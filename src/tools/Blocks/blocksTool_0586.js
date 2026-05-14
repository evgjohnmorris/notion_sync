/**
 * Generated Tool: blocksTool_0586
 * Domain: Blocks
 * ID: 0586
 */
exports.blocksTool_0586 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0586:', error);
    throw error;
  }
};
