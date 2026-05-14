/**
 * Generated Tool: blocksTool_0197
 * Domain: Blocks
 * ID: 0197
 */
exports.blocksTool_0197 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0197:', error);
    throw error;
  }
};
