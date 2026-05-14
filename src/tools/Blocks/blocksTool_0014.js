/**
 * Generated Tool: blocksTool_0014
 * Domain: Blocks
 * ID: 0014
 */
exports.blocksTool_0014 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0014:', error);
    throw error;
  }
};
