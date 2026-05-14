/**
 * Generated Tool: blocksTool_0181
 * Domain: Blocks
 * ID: 0181
 */
exports.blocksTool_0181 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0181:', error);
    throw error;
  }
};
