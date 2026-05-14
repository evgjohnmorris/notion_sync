/**
 * Generated Tool: blocksTool_0142
 * Domain: Blocks
 * ID: 0142
 */
exports.blocksTool_0142 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0142:', error);
    throw error;
  }
};
