/**
 * Generated Tool: blocksTool_0174
 * Domain: Blocks
 * ID: 0174
 */
exports.blocksTool_0174 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0174:', error);
    throw error;
  }
};
