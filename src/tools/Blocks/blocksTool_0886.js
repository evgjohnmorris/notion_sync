/**
 * Generated Tool: blocksTool_0886
 * Domain: Blocks
 * ID: 0886
 */
exports.blocksTool_0886 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0886:', error);
    throw error;
  }
};
