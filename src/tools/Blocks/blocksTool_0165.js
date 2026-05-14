/**
 * Generated Tool: blocksTool_0165
 * Domain: Blocks
 * ID: 0165
 */
exports.blocksTool_0165 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0165:', error);
    throw error;
  }
};
