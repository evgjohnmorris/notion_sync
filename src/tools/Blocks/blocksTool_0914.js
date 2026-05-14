/**
 * Generated Tool: blocksTool_0914
 * Domain: Blocks
 * ID: 0914
 */
exports.blocksTool_0914 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0914:', error);
    throw error;
  }
};
