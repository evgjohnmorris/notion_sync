/**
 * Generated Tool: blocksTool_0622
 * Domain: Blocks
 * ID: 0622
 */
exports.blocksTool_0622 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0622:', error);
    throw error;
  }
};
