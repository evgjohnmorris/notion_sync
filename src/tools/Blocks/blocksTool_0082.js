/**
 * Generated Tool: blocksTool_0082
 * Domain: Blocks
 * ID: 0082
 */
exports.blocksTool_0082 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0082:', error);
    throw error;
  }
};
