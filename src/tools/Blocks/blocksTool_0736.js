/**
 * Generated Tool: blocksTool_0736
 * Domain: Blocks
 * ID: 0736
 */
exports.blocksTool_0736 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0736:', error);
    throw error;
  }
};
