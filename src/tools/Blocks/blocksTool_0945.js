/**
 * Generated Tool: blocksTool_0945
 * Domain: Blocks
 * ID: 0945
 */
exports.blocksTool_0945 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0945:', error);
    throw error;
  }
};
