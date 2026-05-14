/**
 * Generated Tool: databasesTool_0886
 * Domain: Databases
 * ID: 0886
 */
exports.databasesTool_0886 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0886:', error);
    throw error;
  }
};
