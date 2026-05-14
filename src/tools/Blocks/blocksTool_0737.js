/**
 * Generated Tool: blocksTool_0737
 * Domain: Blocks
 * ID: 0737
 */
exports.blocksTool_0737 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0737:', error);
    throw error;
  }
};
