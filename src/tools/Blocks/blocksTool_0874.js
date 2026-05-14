/**
 * Generated Tool: blocksTool_0874
 * Domain: Blocks
 * ID: 0874
 */
exports.blocksTool_0874 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0874:', error);
    throw error;
  }
};
