/**
 * Generated Tool: blocksTool_0887
 * Domain: Blocks
 * ID: 0887
 */
exports.blocksTool_0887 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0887:', error);
    throw error;
  }
};
