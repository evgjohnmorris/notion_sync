/**
 * Generated Tool: blocksTool_0773
 * Domain: Blocks
 * ID: 0773
 */
exports.blocksTool_0773 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0773:', error);
    throw error;
  }
};
