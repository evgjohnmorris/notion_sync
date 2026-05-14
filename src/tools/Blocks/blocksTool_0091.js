/**
 * Generated Tool: blocksTool_0091
 * Domain: Blocks
 * ID: 0091
 */
exports.blocksTool_0091 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0091:', error);
    throw error;
  }
};
