/**
 * Generated Tool: blocksTool_0020
 * Domain: Blocks
 * ID: 0020
 */
exports.blocksTool_0020 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0020:', error);
    throw error;
  }
};
